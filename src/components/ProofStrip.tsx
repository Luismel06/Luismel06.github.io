import { PiCheckCircle, PiLightning, PiTrendUp } from "react-icons/pi";
import type { ProofPoint } from "../content/types";

interface ProofStripProps {
  points: ProofPoint[];
}

const icons = [PiCheckCircle, PiTrendUp, PiLightning];

export function ProofStrip({ points }: ProofStripProps) {
  return (
    <section className="proof-strip" aria-label="Career highlights">
      {points.map((point, index) => {
        const Icon = icons[index];
        return (
          <article
            className={`proof-point reveal-delay-${index + 1}`}
            data-reveal="up"
            key={point.value}
          >
            <span className={`proof-point__icon proof-point__icon--${index + 1}`}>
              <Icon aria-hidden="true" />
            </span>
            <div>
              <h2>{point.value}</h2>
              <p>{point.detail}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
}
