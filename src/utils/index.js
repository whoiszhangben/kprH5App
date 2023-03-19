import dayjs from "dayjs";

export const formateDate = (time, format="YYYY-MM-DD hh:mm:ss") => {
  return dayjs(time).format(format);
};

// utils function here...
