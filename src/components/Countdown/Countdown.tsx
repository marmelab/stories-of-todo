import { CSSProperties } from "react";
import { useCountdown } from "./useCountdown";

export const Countdown = ({ targetDate }: { targetDate: Date }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return (
      <span className="text-red-500 text-xs">
        {targetDate.toLocaleString()} - Expired
      </span>
    );
  }

  return (
    <span className="countdown font-mono text-xs">
      {days < 99 && (
        <>
          <span style={{ "--value": days } as CSSProperties}></span>:
        </>
      )}
      {hours < 99 && (
        <>
          <span style={{ "--value": hours } as CSSProperties}></span>:
        </>
      )}

      {minutes < 99 && (
        <>
          <span style={{ "--value": minutes } as CSSProperties}></span>:
        </>
      )}
      {seconds < 99 && (
        <>
          <span style={{ "--value": seconds } as CSSProperties}></span>s
        </>
      )}
    </span>
  );
};
