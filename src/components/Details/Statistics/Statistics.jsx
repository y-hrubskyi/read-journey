import { getLastReadPage } from '~/utils/getLastReadPage';
import { calcProgress } from '~/utils/calcProgress';

import { DetailsTitle, InfoBlock, InfoBlockHeader } from '../Details.styled';
import { DetailsNav } from '../DetailsNav/DetailsNav';

import * as SC from './Statistics.styled';

export const Statistics = ({ book, detailsType, setDetailsType }) => {
  const { totalPages, progress } = book;

  const readPages = getLastReadPage(progress, totalPages);
  const readingProgress = calcProgress(readPages, totalPages);

  return (
    <InfoBlock>
      <InfoBlockHeader>
        <DetailsTitle>Statistics</DetailsTitle>
        <DetailsNav detailsType={detailsType} setDetailsType={setDetailsType} />
      </InfoBlockHeader>
      <SC.StatisticsDescription>
        Each page, each chapter is a new round of knowledge, a new step towards
        understanding. By rewriting statistics, we create our own reading
        history.
      </SC.StatisticsDescription>
      <SC.ChartWrapper>
        <SC.ChartContainer>
          <SC.PieChart data-value={readingProgress}>100%</SC.PieChart>
        </SC.ChartContainer>
        <SC.Label>
          <SC.LabelColor />
          <div>
            <SC.LabelValue>{readingProgress}%</SC.LabelValue>
            <SC.LabelProgress>
              {readPages} {readPages === 1 ? 'page' : 'pages'} read
            </SC.LabelProgress>
          </div>
        </SC.Label>
      </SC.ChartWrapper>
    </InfoBlock>
  );
};
