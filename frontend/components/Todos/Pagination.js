import classes from "./Pagination.module.css";

function Pagination(props) {
  return (
    <div className={classes.paginationFilter}>
      <label htmlFor="pageSize">Page Size: </label>
      <select id="pageSize" value={props.pageSize} onChange={props.onPageSizeChange}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </select>
    </div>
  );
}

export default Pagination;
