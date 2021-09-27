import React from "react";
import { defaultRules } from "./QueryBuilderHelper";

import "../style.css";
import "./Filter.css";

export const Filter = ({
  filter,
  index,
  handleFieldChange,
  handleDeleteFilter,
  filterLength,
}) => {
  return (
    <>
      <textarea
        className="border border-1"
        rows="1"
        value={JSON.stringify(filter)}
        readOnly
        style={{ display: "none" }}
      ></textarea>
      <div className="row myFormGroup">
        <div className="col-md-4">
          <label className="form-label select-label">Field</label>
          <select
            name="field"
            className="form-select form-control"
            onChange={(e) => handleFieldChange(e, index)}
            value={filter.field}
          >
            {defaultRules.fields.map((field) => {
              return (
                <option key={field.name} value={field.name}>
                  {field.label}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-md-4">
          <label className="form-label select-label">Condition</label>
          <select
            name="condition"
            className="form-select form-control"
            onChange={(e) => handleFieldChange(e, index)}
            value={filter.condition}
          >
            {defaultRules.conditions.map((condition) => {
              return (
                <option key={condition.name} value={condition.name}>
                  {condition.label}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-md-3">
          {filter.type === "string" && (
            <>
              <label className="form-label select-label">Criteria</label>
              <input
                name="criteria"
                className="form-input form-control"
                onChange={(e) => handleFieldChange(e, index)}
                value={filter.criteria}
              />
            </>
          )}
        </div>
        <div className="col-md-1">
          <label className="form-label select-label"> </label>
          {filterLength > 1 && (
            <button
              className="btn btn-danger d-block"
              onClick={() => {
                handleDeleteFilter(index);
              }}
            >
              X
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Filter;
