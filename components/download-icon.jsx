import React from 'react'

const DownloadIcon = () => {
  return (
    <a
    target="_blank"
    href="/documents/Nemanja Dragun - Resume.pdf"
    download=""
    aria-label="Download resume"
    class="flex items-center justify-center w-10 h-10 bg-yellow-500 dark:bg-yellow-400 bg-opacity-20 dark:bg-opacity-20 border border-yellow-500 dark:border-yellow-600 border-opacity-20 hover:border-yellow-500 dark:hover:border-yellow-400 rounded-full"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      class="icon text-yellow-400 dark:text-yellow-800"
      width="22px"
      height="22px"
      viewBox="0 0 24 24"
      data-v-f43f2976=""
    >
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      >
        <path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.5s"
            dur="0.4s"
            values="14;0"
          ></animate>
        </path>
        <path
          stroke-dasharray="18"
          stroke-dashoffset="18"
          d="M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.4s"
            values="18;0"
          ></animate>
          <animate
            attributeName="d"
            calcMode="linear"
            dur="1.5s"
            keyTimes="0;0.7;1"
            repeatCount="indefinite"
            values="M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5;M12 4 h2 v3 h2.5 L12 11.5M12 4 h-2 v3 h-2.5 L12 11.5;M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5"
          ></animate>
        </path>
      </g>
    </svg>
  </a>
  )
}

export default DownloadIcon