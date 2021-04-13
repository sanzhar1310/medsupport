import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { remCalc } from './utils';

export enum Breakpoint {
  PHONE = 'PHONE',
  TABLET = 'TABLET',
  DESKTOP = 'DESKTOP',
  XLARGE = 'XLARGE',
}

type RWDFunction = (arg: FlattenSimpleInterpolation) => FlattenSimpleInterpolation;

export interface RWDObject {
  [Breakpoint.PHONE]: RWDFunction;
  [Breakpoint.TABLET]: RWDFunction;
  [Breakpoint.DESKTOP]: RWDFunction;
  [Breakpoint.XLARGE]: RWDFunction;
}

const sizes = {
  [Breakpoint.PHONE]: `${remCalc(320)}em`,
  [Breakpoint.TABLET]: `${remCalc(768)}em`,
  [Breakpoint.DESKTOP]: `${remCalc(1024)}em`,
  [Breakpoint.XLARGE]: `${remCalc(1440)}em`,
};

/**
 * Helper rwd object to handle media breakpoints in styled components
 * @example
 * styled.div`
 *  width: 100%;
 *
 *  ${rwd[Breakpoint.MEDIUM]`
 *    width: 50%;
 *  `}
 * `
 */
export const rwd = Object.keys(sizes).reduce<RWDObject>((acc: RWDObject, label) => {
  acc[label as Breakpoint] = (argCss: FlattenSimpleInterpolation) => css`
    @media (min-width: ${sizes[label as Breakpoint]}) {
      ${argCss}
    }
  `;

  return acc;
}, {} as RWDObject);

interface DisplayOnBreakpointProps {
  down?: boolean;
  up?: boolean;
  breakpoint: Breakpoint;
}

export const DisplayOnBreakpoint = styled.div<DisplayOnBreakpointProps>`
  ${(props) =>
    props.down &&
    css`
      display: block;
      ${rwd[props.breakpoint](css`
        display: none;
      `)}
    `}
  ${(props) =>
    props.up &&
    css`
      display: none;
      ${rwd[props.breakpoint](css`
        display: block;
      `)}
    `}
`;

export default rwd;
