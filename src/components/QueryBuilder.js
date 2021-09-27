import React, { useState } from "react";

import Group from "./Group";

import "../style.css";
import "./QueryBuilder.css";

export const QueryBuilder = () => {
  const defaultFilter = {
    field: "theme",
    condition: "equals",
    criteria: "",
    type: "string",
  };
  const defaultGroup = {
    and: [defaultFilter],
  };
  const [groups, setGroups] = useState([defaultGroup]);

  const handleAddGroup = (e) => {
    e.preventDefault();
    setGroups([...groups, defaultGroup]);
  };

  const handleDeleteGroup = (index) => {
    setGroups((prevGroups) => {
      const newGroups = [...prevGroups];
      newGroups.splice(index, 1);
      return newGroups;
    });
  };

  const handleChangeGroupType = (type, index) => {
    setGroups((prevGroups) => {
      const currentGroups = [...prevGroups];
      let groupType = Object.keys(currentGroups[index])[0];
      currentGroups[index] = {
        [type]: currentGroups[index][groupType],
      };
      return currentGroups;
    });
  };

  const handleUpdateGroup = (filters, index) => {
    setGroups((prevGroups) => {
      const currentGroups = [...prevGroups];
      let groupType = Object.keys(currentGroups[index])[0];
      currentGroups[index] = {
        [groupType]: filters,
      };
      return currentGroups;
    });
  };

  return (
    <div className="popup">
      <div className="container">
        <div className="query">
          <h6>Build your query</h6>
          <div>
            <textarea
              className="border border-1"
              rows="5"
              readOnly
              value={JSON.stringify(groups)}
            ></textarea>
          </div>
        </div>
        {groups.map((group, index) => (
          <Group
            key={index}
            groupIndex={index}
            group={group}
            handleChangeGroupType={handleChangeGroupType}
            handleUpdateGroup={handleUpdateGroup}
            handleDeleteGroup={handleDeleteGroup}
          />
        ))}
        <button
          className="btn btn-primary mt-4"
          onClick={(e) => handleAddGroup(e)}
        >
          + Add new group filter
        </button>
      </div>
      <div className="bottom-btn col-md-10">
        <button className="btn btn-light">Back</button>
        <button className="btn btn-primary">Finish</button>
      </div>
    </div>
  );
};

export default QueryBuilder;
