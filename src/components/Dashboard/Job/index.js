import React, { Component } from "react";
import TopButtons from "./TopButtons/";
import Enquiry from "./Enquiry/";
import Followups from "./Followups";
import FollowupForm from "./FollowupForm";
import "./job.css";

class Job extends Component {
  constructor(props) {
    super(props);
  }

  handleAddNewFollowup = newFollowup => {
    this.props.data.followUps.push(newFollowup);
    this.props.addNewFollowUps(this.props.data.followUps);
  };

  render() {
    const { data, assignLead, editLead, moveLead } = this.props;
    return (
      <div className="job">
        <div className="job-container">
          <TopButtons
            data={data}
            assignLead={assignLead}
            editLead={editLead}
            moveLead={moveLead}
          />
          <Enquiry data={data} />
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
