"use client";
import React from "react";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
export function ProjectsEmptyScreen() {
  return (
    <div
      className={`p-1 gap-5 flex flex-col justify-center pt-[150px] pb-8 items-center`}
    >
      <ListAltIcon
        sx={{ fontSize: "130px" }}
        className="text-slate-400 opacity-25"
      />

      <div className=" flex flex-col items-center gap-2">
        <h3 className="font-semibold opacity-80 text-slate-600 text-[16px]  mb-1 text-center">
          {`No Projects Created Yet...`}
        </h3>
        <p className="text-slate-400 w-[340px] text-center opacity-80 text-[13px]">
          {`It looks like you haven't started any projects yet. Create a new project to begin managing your tasks.`}
        </p>
      </div>
    </div>
  );
}

export function TasksEmptyScreen() {
  return (
    <div
      className={`p-1 gap-5 flex flex-col justify-center pt-[150px] pb-8 items-center relative`}
    >
      <div className="    relative">
        <ErrorRoundedIcon
          sx={{ fontSize: "60px" }}
          className="text-slate-400  absolute -right-3 -top-2"
        />
        <ListAltIcon
          sx={{ fontSize: "130px" }}
          className="text-slate-400 opacity-25"
        />
      </div>

      <div className=" flex flex-col items-center gap-2">
        <h3 className="font-semibold opacity-80 text-slate-600 text-[16px]  mb-1 text-center">
          {`No Tasks Created Yet...`}
        </h3>
        <p className="text-slate-400 w-[340px] text-center opacity-80 text-[13px]">
          {`It looks like you haven't created any tasks.`}
        </p>
      </div>
    </div>
  );
}

export function ConfettiScreen() {
  return (
    <div
      className={`p-1 gap-5 flex flex-col justify-center pt-[80px] pb-8 items-center relative`}
    >
      <svg
        height="100px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="#94a3b8"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M13.3057 18.2975L8.23724 19.987C5.47183 20.9088 4.08912 21.3697 3.35924 20.6398C2.62936 19.9099 3.09026 18.5272 4.01207 15.7618L5.70156 10.6933C6.46758 8.39525 6.85059 7.24623 7.75684 7.03229C8.6631 6.81835 9.51953 7.67478 11.2324 9.38764L14.6114 12.7666C16.3242 14.4795 17.1807 15.3359 16.9667 16.2422"
            stroke="#94a3b8"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>{" "}
          <path
            d="M12.2351 18.3461C12.2351 18.3461 11.477 16.0649 11.477 14.5552C11.477 13.0454 12.2351 10.7643 12.2351 10.7643M8.06517 19.4833C8.06517 19.4833 7.42484 16.7314 7.307 14.9343C7.11229 11.965 8.06517 7.35254 8.06517 7.35254"
            stroke="#94a3b8"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>{" "}
          <path
            d="M14.5093 10.0061L14.6533 9.28614C14.7986 8.55924 15.3224 7.96597 16.0256 7.73155C16.7289 7.49714 17.2526 6.90387 17.398 6.17697L17.542 5.45703"
            stroke="#94a3b8"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>{" "}
          <path
            d="M17.5693 13.2533L17.7822 13.3762C18.4393 13.7556 19.2655 13.6719 19.8332 13.1685C20.3473 12.7126 21.0794 12.597 21.709 12.8723L22.0005 12.9997"
            stroke="#94a3b8"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>{" "}
          <path
            d="M9.79513 2.77903C9.45764 3.33109 9.54223 4.04247 9.99976 4.5L10.0976 4.59788C10.4908 4.99104 10.6358 5.56862 10.4749 6.10085"
            stroke="#94a3b8"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>{" "}
          <path
            d="M6.92761 3.94079C7.13708 3.73132 7.47669 3.73132 7.68616 3.94079C7.89563 4.15026 7.89563 4.48988 7.68616 4.69935C7.47669 4.90882 7.13708 4.90882 6.92761 4.69935C6.71814 4.48988 6.71814 4.15026 6.92761 3.94079Z"
            fill="#94a3b8"
          ></path>{" "}
          <path
            d="M12.1571 7.1571C12.3666 6.94763 12.7062 6.94763 12.9157 7.1571C13.1251 7.36657 13.1251 7.70619 12.9157 7.91566C12.7062 8.12512 12.3666 8.12512 12.1571 7.91566C11.9476 7.70619 11.9476 7.36657 12.1571 7.1571Z"
            fill="#94a3b8"
          ></path>{" "}
          <path
            d="M17.1571 10.1571C17.3666 9.94763 17.7062 9.94763 17.9157 10.1571C18.1251 10.3666 18.1251 10.7062 17.9157 10.9157C17.7062 11.1251 17.3666 11.1251 17.1571 10.9157C16.9476 10.7062 16.9476 10.3666 17.1571 10.1571Z"
            fill="#94a3b8"
          ></path>{" "}
          <path
            d="M19.0582 15.3134C19.2677 15.1039 19.6073 15.1039 19.8168 15.3134C20.0262 15.5228 20.0262 15.8624 19.8168 16.0719C19.6073 16.2814 19.2677 16.2814 19.0582 16.0719C18.8488 15.8624 18.8488 15.5228 19.0582 15.3134Z"
            fill="#94a3b8"
          ></path>{" "}
          <path
            d="M19.3615 7.71436C18.6912 8.38463 19.1722 10.328 19.1722 10.328C19.1722 10.328 21.1156 10.809 21.7859 10.1387C22.4958 9.42884 22.0941 8.49708 21.0002 8.5C21.0032 7.40615 20.0714 7.00447 19.3615 7.71436Z"
            stroke="#94a3b8"
            strokeLinejoin="round"
          ></path>{" "}
          <path
            d="M15.1884 3.41748L15.1608 3.51459C15.1305 3.62126 15.1153 3.67459 15.1225 3.72695C15.1296 3.77931 15.1583 3.82476 15.2157 3.91567L15.2679 3.99844C15.4698 4.31836 15.5707 4.47831 15.5019 4.60915C15.4332 4.73998 15.2402 4.75504 14.8544 4.78517L14.7546 4.79296C14.6449 4.80152 14.5901 4.8058 14.5422 4.83099C14.4943 4.85618 14.4587 4.89943 14.3875 4.98592L14.3226 5.06467C14.072 5.36905 13.9467 5.52124 13.8038 5.50167C13.6609 5.4821 13.595 5.30373 13.4632 4.94699L13.4291 4.85469C13.3916 4.75332 13.3729 4.70263 13.3361 4.66584C13.2993 4.62905 13.2486 4.61033 13.1472 4.57287L13.0549 4.53878C12.6982 4.40698 12.5198 4.34108 12.5003 4.19815C12.4807 4.05522 12.6329 3.92992 12.9373 3.67932L13.016 3.61448C13.1025 3.54327 13.1458 3.50767 13.1709 3.45974C13.1961 3.41181 13.2004 3.35699 13.209 3.24735L13.2168 3.14753C13.2469 2.76169 13.262 2.56877 13.3928 2.50001C13.5236 2.43124 13.6836 2.53217 14.0035 2.73403L14.0863 2.78626C14.1772 2.84362 14.2226 2.8723 14.275 2.87947C14.3273 2.88664 14.3807 2.87148 14.4873 2.84117L14.5845 2.81358C14.9598 2.70692 15.1475 2.65359 15.2479 2.75402C15.3483 2.85445 15.295 3.04213 15.1884 3.41748Z"
            stroke="#94a3b8"
          ></path>{" "}
        </g>
      </svg>

      <div className=" flex flex-col items-center gap-1">
        <h3 className="font-semibold opacity-80 text-slate-600 text-[16px]   text-center">
          {`All Tasks Completed!`}
        </h3>
        <p className="text-slate-400 w-[340px] text-center opacity-80 text-[13px]">
          {`Congratulations! You have completed all your tasks`}
        </p>
      </div>
    </div>
  );
}

export function NoTasksDoneYetScreen() {
  return (
    <div
      className={`p-1 gap-5 flex text-slate-400 flex-col justify-center pt-[80px] pb-8 items-center relative`}
    >
      <svg
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="#94a3b8"
        color="#94a3b8"
        height={"100px"}
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M6 0L5 .25V1h1zm0 1v1H5V1c-1.258.015-2.179-.03-2.931.385-.377.208-.676.56-.84.998-.165.439-.223.96-.223 1.617v8c0 .658.058 1.179.223 1.617.164.44.463.789.84.997.752.415 1.673.372 2.931.386h3.004v-1H5c-1.26-.014-2.087-.06-2.453-.261-.183-.102-.29-.213-.387-.473C2.062 13.006 2 12.593 2 12V7c0-.592.063-1.005.16-1.265.098-.26.204-.372.387-.473.367-.202 1.195-.247 2.459-.262H11c1.26.015 2.087.06 2.453.262.184.101.29.213.387.473C13.938 5.995 14 7 14 7v1h1V4c0-.657-.06-1.178-.225-1.617a1.88 1.88 0 0 0-.837-.998c-.753-.415-1.674-.37-2.932-.385v1h-1V1zm4 0h1V0l-1 .25z"
            color="#94a3b8"
            font-weight="400"
            font-family="sans-serif"
            white-space="normal"
            overflow="visible"
            fill="#94a3b8"
          ></path>{" "}
          <path
            d="M12.5 9A3.5 3.5 0 0 0 9 12.5a3.5 3.5 0 0 0 3.5 3.5 3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 12.5 9zm-.5 1h1v1.168c0 .349-.016.668-.047.957-.03.29-.069.581-.115.875h-.666a12.898 12.898 0 0 1-.125-.875 9.146 9.146 0 0 1-.047-.957zm.5 4a.5.5 0 0 1 .5.5.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5z"
            color="#94a3b8"
            overflow="visible"
            fill="#94a3b8"
          ></path>{" "}
        </g>
      </svg>

      <div className=" flex flex-col items-center gap-1">
        <h3 className="font-semibold opacity-80 text-slate-600 text-[16px]   text-center">
          {`No Tasks Completed Yet...`}
        </h3>
        <p className="text-slate-400 w-[340px] text-center opacity-80 text-[13px]">
          {`It looks like you haven't completed any tasks yet. Start tackling them!`}
        </p>
      </div>
    </div>
  );
}
