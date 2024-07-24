import * as SC from './Progress.styled';

export const Progress = () => {
  return (
    <SC.Wrapper>
      <SC.ProgressTitle>Progress</SC.ProgressTitle>
      <SC.ProgressDescription>
        Here you will see when and how much you read. To record, click on the
        red button above.
      </SC.ProgressDescription>
      <SC.StarWrapper />
    </SC.Wrapper>
  );
};
