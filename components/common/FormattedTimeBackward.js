import { useEffect, useState, useRef } from "react";

export default function FormattedTimeBackward({ time, expiredFormat }) {
  const formattedTime = useRef(0);
  const [timeThen, setTimeThen] = useState(time);

  let timeDifference;

  useEffect(() => {
    timeDifference =
      Math.floor(new Date(timeThen) / 1000) - Math.floor(new Date() / 1000);

    if (timeDifference < 60 && timeDifference > 0) {
      formattedTime.current = `${timeDifference}s`;
    }

    if (timeDifference > 60 && timeDifference < 3600) {
      const minutes = Math.floor(timeDifference / 60);
      formattedTime.current = `${minutes}m`;
    }

    if (timeDifference > 3600) {
      const hours = Math.floor(timeDifference / 3600);
      formattedTime.current = `${hours}h`;
    }

    if (timeDifference > 86400) {
      const days = Math.floor(timeDifference / 86400);
      formattedTime.current = `${days}d`;
    }

    if (timeDifference > 604800) {
      const weeks = Math.floor(timeDifference / 604800);
      formattedTime.current = `${weeks}w`;
    }

    if (timeDifference > 2419200) {
      const months = Math.floor(timeDifference / 2419200);
      formattedTime.current = `${months}m`;
    }

    if (timeDifference <= 0) {
      if (expiredFormat) {
        formattedTime.current = expiredFormat;
      } else {
        formattedTime.current = `Exp`;
      }
    }
  }, [timeThen]);

  useEffect(() => {
    if (timeDifference === 0) return;

    let intervalId = setTimeout(() => {
      setTimeThen((prevValue) => prevValue - 1);
    }, 1000);

    return () => clearTimeout(intervalId);
  }, [timeThen]);

  return `${formattedTime.current}`;
}
