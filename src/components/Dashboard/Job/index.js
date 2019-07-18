import React, { Component } from "react";
import TopButtons from "./TopButtons/";
import Enquiry from "./Enquiry/";
import Followups from "./Followups";
import FollowupForm from "./FollowupForm";
import ImageDisplay from "./ImageDisplay";
import EditJob from "./EditJob";
import axios from "axios";
import "./job.css";

class Job extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editJob: false
    };
  }

  handleAddNewFollowup = newFollowup => {
    this.props.data.followUps.push(newFollowup);
    this.props.addNewFollowUps(this.props.data.followUps);
  };

  handleSaveUpdatedLead = async updatedLead => {
    const id = this.props.data._id;
    await axios.put(`${process.env.REACT_APP_API_URL}/jobs/${id}`, updatedLead);
  };

  handleShowEditForm = () => {
    this.setState({
      editJob: !this.state.editJob
    });
  };

  render() {
    const { data, assignLead, editLead, moveLead, back } = this.props;
    return (
      <div className="job">
        <div className="job-container">
          <TopButtons
            data={data}
            assignLead={assignLead}
            editLead={editLead}
            moveLead={moveLead}
            back={back}
          />
          {this.state.editJob ? (
            <EditJob data={data} saveUpdatedLead={this.handleSaveUpdatedLead} />
          ) : (
            <Enquiry data={data} showEditForm={this.handleShowEditForm} />
          )}
          <ImageDisplay data={data} />
          <Followups data={data} />
          <FollowupForm
            data={data}
            addNewFollowup={this.handleAddNewFollowup}
          />
        </div>
      </div>
    );
  }
}

export default Job;
