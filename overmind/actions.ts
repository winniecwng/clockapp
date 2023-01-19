import { Context } from "../overmind";

export const getWorldTime = async ({ state, effects, actions }: Context) => {
  try {
    const data = await effects.getWorldTime();
    const { day_of_week, day_of_year, timezone, week_number } = data;
    state.dayOfWeek = day_of_week;
    state.dayOfYear = day_of_year;
    state.timezone = timezone;
    state.weekNumber = week_number;

    const expandData = [
      { title: "Current Timezone", info: timezone },
      { title: "Day of the Year", info: day_of_year },
      { title: "Day of the Week", info: day_of_week },
      { title: "Week Number", info: week_number },
    ];
    state.timeData = expandData;
    state.isLoading = false;
  } catch (error) {
    console.log("Error:", error);
  }
};

export const handleExpandData = ({ state, effects, actions }: Context) => {
  state.isExpand = !state.isExpand;
};

// export function setCurrentTime({ data }: { data: any }) {
//   return data;
// }

export const setCurrentTime = (
  { state, actions, effects }: Context,
  currentData: any
) => {
  state.currentTime = currentData;
  actions.formatTime();
};

export const formatTime = ({ state, actions, effects }: Context) => {
  const formattedTime = state.currentTime.data.timezone.current_time.slice(
    11,
    16
  );

  state.formatTime = formattedTime;
};
