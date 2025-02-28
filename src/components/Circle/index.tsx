import s from "./index.module.scss";

import { useState, useEffect } from 'react';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Draggable from "gsap/dist/Draggable";

import { clsx } from 'clsx';

interface ICircleWithPoints {
    points: number;
    activePoint: number;
    onChangeActivePoint: (value: number) => void;
}

export const CircleWithPoints = ({ points, activePoint, onChangeActivePoint }: ICircleWithPoints) => {
    const [hoveredPoint, setHoveredPoint] = useState(activePoint);
    const [activePointIndex, setActivePointIndex] = useState(activePoint);

    const pointCount = Math.min(Math.max(points, 2), 6);
    const circleSize = 530;
    const radius = circleSize / 2;

    useGSAP(() => {
        gsap.registerPlugin(Draggable)

        Draggable.create(".CIRCLE", {
            type: "rotation",
            inertia: true,
        })
    }, [])

    useEffect(() => {
        setActivePointIndex(activePoint);
    }, [activePoint]);

    useEffect(() => {
        setHoveredPoint(activePointIndex)
    }, [activePointIndex]);

    return (
        <div className={s["circle-container"]}>
            <div
                className={clsx(s["circle"], 'CIRCLE')}
            >
                {Array.from({ length: pointCount }).map((_, index) => {
                    const angle = (index / pointCount) * Math.PI * 2;
                    const x = radius * Math.cos(angle);
                    const y = radius * Math.sin(angle);

                    return <div
                        key={index} className={s['point']} style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                    }}
                        onMouseEnter={() => setHoveredPoint(index)}
                        onMouseLeave={() => setHoveredPoint(activePointIndex)}
                        onClick={() => onChangeActivePoint(index)}
                    >
                        <div
                            className={clsx(s['tooltip'], hoveredPoint !== index && s.hide)}
                        >
                            {index + 1}
                        </div>
                    </div>;
                })}
            </div>
        </div>
    );
};
