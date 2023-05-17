import { Fragment } from "react";
import classes from "./Pagination.module.css";

function Pagination(props) {
  const handlePageClick = (event, page) => {
    event.preventDefault();
    props.onPageChange(page);
  };

  const renderPaginationLinks = () => {
    const links = [];

    if (props.currentPage > 1) {
      links.push(
        <a
          key="prev"
          href={`?pageSize=${props.pageSize}&page=${props.currentPage - 1}`}
          onClick={(event) => handlePageClick(event, props.currentPage - 1)}
        >
          &laquo; Prev
        </a>
      );
    }

    for (let i = 1; i <= props.pageCount; i++) {
      if (i === props.currentPage) {
        links.push(
          <a
            key={i}
            href={`?pageSize=${props.pageSize}&page=${i}`}
            className={classes.active}
          >
            {" -"+i+"- "}
          </a>
        );
      } else {
        links.push(
          <a
            key={i}
            href={`?pageSize=${props.pageSize}&page=${i}`}
            onClick={(event) => handlePageClick(event, i)}
          >
            {" "+i+" "}
          </a>
        );
      }
    }

    if (props.currentPage < props.pageCount) {
      links.push(
        <a
          key="next"
          href={`?pageSize=${props.pageSize}&page=${props.currentPage + 1}`}
          onClick={(event) => handlePageClick(event, props.currentPage + 1)}
        >
          Next &raquo;
        </a>
      );
    }

    return links;
  };

  return (
    <Fragment>
      <div className={classes.paginationFilter}>
        <label htmlFor="pageSize">Page Size: </label>
        <select
          id="pageSize"
          value={props.pageSize}
          onChange={props.onPageSizeChange}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>
      <div className={classes.paginationLinks}>{renderPaginationLinks()}</div>
    </Fragment>
  );
}

export default Pagination;
