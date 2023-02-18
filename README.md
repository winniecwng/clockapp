```...javascript

  const currentGreetingTime = (hour: any) => {
    if (5 < hour && hour < 12) {
      return "Good Morning";
    } else if (12 <= hour && hour < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  useEffect(() => {
    if (formatTime) {
      const hour = parseInt(formatTime.slice(0, 2));
      const currentGreeting = currentGreetingTime(hour);
      setGreeting(currentGreeting);
    }
  }, [formatTime]);

```
This is a Clock App challenge on Frontend Mentor. In this scenario, I have to display the right greeting based on the current time of day. `formatTime` is a props being pass down and I have it inside the useEffect dependency so that we don't encounter any null setting when the page first loads. Only until the component has a `formatTime` value do we set the  `greeting` state and render it on the UI.
