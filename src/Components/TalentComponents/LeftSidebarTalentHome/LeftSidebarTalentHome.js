import React from 'react'

export default function LeftSidebarTalentHome() {
  return (
    <div className="col d-none d-lg-block">
      <ul
        id="list-homepage"
        className="list-group sidebar-homebage-ul mb-lg-4"
      >
        <li
          className="list-group-item sidebar-homebage-ul-li"
          aria-current="true"
        >
          <a
            href="a"
            className=" list-group-item-action sidebar-homebage-ul-li-aa activeside"
            aria-current="true"
          >
            My Feed
              </a>
        </li>
        <li
          className="list-group-item sidebar-homebage-ul-li"
          aria-current="true"
        >
          <a
            href="a"
            className=" list-group-item-action sidebar-homebage-ul-li-aa"
            aria-current="true"
          >
            Best Matches
              </a>{" "}
          <span className="hotspot">
            <button className="hotspot__btn" />
          </span>
        </li>
        <li
          className="list-group-item sidebar-homebage-ul-li"
          aria-current="true"
        >
          <a
            href="a"
            className=" list-group-item-action sidebar-homebage-ul-li-aa"
            aria-current="true"
          >
            Recommended
              </a>
        </li>
      </ul>
      <h5 className="mb-lg-2 display-inline-block">My Categories</h5>
      <ul
        className="list-group sidebar-homebage-ul mb-lg-3 "
        style={{ fontSize: "0.9em" }}
      >
        <li
          className="list-group-item sidebar-homebage-ul-li "
          aria-current="true"
        >
          <a
            href="a"
            className=" list-group-item-action advanced-search-link"
            aria-current="true"
          >
            Web develop
              </a>
        </li>
        <li
          className="list-group-item sidebar-homebage-ul-li"
          aria-current="true"
        >
          <a
            href="a"
            className=" list-group-item-action advanced-search-link"
            aria-current="true"
          >
            Graphic design
              </a>{" "}
        </li>
        <li
          className="list-group-item sidebar-homebage-ul-li"
          aria-current="true"
        >
          <a
            href="a"
            className=" list-group-item-action advanced-search-link"
            aria-current="true"
          >
            Cms
              </a>
        </li>
        <li
          className="list-group-item sidebar-homebage-ul-li"
          aria-current="true"
        >
          <a
            href="a"
            className=" list-group-item-action advanced-search-link"
            aria-current="true"
          >
            Ecommerce Development
              </a>{" "}
        </li>
      </ul>
      <span className="btn-group float-sm-start px-lg-1">
        <button
          type="button"
          className="btn btn-light dropdown-toggle border border-1 rounded-circle collapsed"
          data-toggle="collapse"
          data-target="#collapse"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-pen" aria-hidden="true" />
        </button>
      </span>
    </div>

  )
}
