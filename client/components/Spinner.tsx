import { RippleSpin, AppSpinnerWrap } from "../styles";
import { SpinnerProps } from "../interfaces";

export default function Spinner(props: SpinnerProps) {
  return (
    <AppSpinnerWrap noMargin={props.noMargin}>
      <RippleSpin>
        <div></div>
        <div></div>
      </RippleSpin>
    </AppSpinnerWrap>
  );
}
