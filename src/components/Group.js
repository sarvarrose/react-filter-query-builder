import React, { useState } from "react";

import Filter from "./Filter";

import "../style.css";
import "./Group.css";

export const Group = ({
  groupIndex,
  group,
  handleChangeGroupType,
  handleUpdateGroup,
  handleDeleteGroup,
}) => {
  const defaultFilter = {
    field: "theme",
    condition: "equals",
    criteria: "",
    type: "string",
  };
  const [filters, setFilters] = useState([defaultFilter]);
  let groupType = Object.keys(group)[0];

  const handleAddFilter = (e) => {
    e.preventDefault();
    setFilters((prevFilters) => {
      const newFilters = [...prevFilters, defaultFilter];
      handleUpdateGroup(newFilters, groupIndex);
      return newFilters;
    });
  };

  const handleDeleteFilter = (index) => {
    setFilters((prevFilters) => {
      const newFilters = [...prevFilters];
      newFilters.splice(index, 1);
      handleUpdateGroup(newFilters, groupIndex);
      return newFilters;
    });
  };

  const handleFieldChange = (e, index) => {
    setFilters((prevFilters) => {
      const currentFilters = [...prevFilters];
      if (e.target.name === "condition") {
        if (e.target.value === "IS NULL") {
          currentFilters[index].type = "empty";
          currentFilters[index].criteria = "";
        } else {
          currentFilters[index].type = "string";
        }
      }
      currentFilters[index] = {
        ...currentFilters[index],
        [e.target.name]: e.target.value,
      };
      handleUpdateGroup(currentFilters, groupIndex);
      return currentFilters;
    });
  };

  return (
    <div className="group-container">
      <textarea
        className="border border-1"
        rows="11"
        value={JSON.stringify(group, null, 2)}
        readOnly
        style={{ display: "none" }}
      ></textarea>
      <div className="border border-1 rounded mt-3 p-3">
        <div className="condition-toggle mb-2">
          <div className="btn-toggle btn-group">
            <button
              className={`btn btn-primary ${groupType === "and" && "active"}`}
              data-bs-toggle="button"
              onClick={() => handleChangeGroupType("and", groupIndex)}
            >
              And
            </button>
            <button
              className={`btn btn-primary ${groupType === "or" && "active"}`}
              data-bs-toggle="button"
              aria-pressed="true"
              onClick={() => handleChangeGroupType("or", groupIndex)}
            >
              Or
            </button>
          </div>
          <button
            className="btn btn-alert border border-1"
            onClick={() => handleDeleteGroup(groupIndex)}
          >
            X
          </button>
        </div>
        {filters.map((filter, index) => (
          <Filter
            key={index}
            index={index}
            filter={filter}
            handleFieldChange={handleFieldChange}
            handleDeleteFilter={handleDeleteFilter}
            filterLength={filters.length}
          />
        ))}
        <button
          className="btn btn-primary mt-1"
          onClick={(e) => handleAddFilter(e)}
        >
          + Add Filter
        </button>
      </div>
    </div>
  );
};

export default Group;
