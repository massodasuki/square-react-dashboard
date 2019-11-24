import * as React from 'react'
import styled from 'styled-components'

const SvgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 98vh;
`

const Svg = styled.svg`
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(270deg);
    }
  }
  animation: rotate 1.4s linear infinite;
`
const Circle = styled.circle`
  @keyframes colors {
    0% {
      stroke: #0062ff;
    }
    100% {
      stroke: #0062ff;
    }
  }
  @keyframes dash {
    0% {
      stroke-dashoffset: 187;
    }
    50% {
      stroke-dashoffset: 46.75;
      transform: rotate(135deg);
    }
    100% {
      stroke-dashoffset: 187;
      transform: rotate(450deg);
    }
  }
  stroke-dasharray: 187;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;
`

const Loader = () => {
  return (
    <SvgWrapper>
      <Svg
        width='30px'
        height='30px'
        viewBox='0 0 66 66'
        xmlns='http://www.w3.org/2000/svg'
      >
        <Circle
          fill='none'
          strokeWidth='6'
          strokeLinecap='round'
          cx='33'
          cy='33'
          r='30'
        />
      </Svg>
    </SvgWrapper>
  )
}

export default Loader