document.addEventListener("DOMContentLoaded", () => {
  const emps = document.querySelectorAll("[data-emp");
  const dbs = document.querySelectorAll("[data-table]");
  const choise = document.querySelector(".employees__choise-body");
  const statistic = document.querySelector(
    ".employees__table-statistic .employees__table-body"
  );
  const statisticRows = statistic?.querySelectorAll(".employees__table-row");

  emps.forEach(function (emp) {
    emp.addEventListener("click", function () {
      const empId = this.getAttribute("data-emp");

      emps.forEach(function (e) {
        e.classList.remove("active");
      });
      dbs.forEach(function (db) {
        db.classList.add("visually-hidden");
      });

      this.classList.add("active");

      const curDb = document.querySelector(
        `.employees__table-body[data-table="${empId}"]`
      );
      if (curDb) {
        curDb.classList.remove("visually-hidden");
        choise.classList.add("visually-hidden");
      } else {
        choise.classList.remove("visually-hidden");
      }
    });
  });

  statisticRows?.forEach((item, i) => {
    const rating = item?.querySelector(".employees__table-rating");

    rating.textContent = i + 1;
  });
});
