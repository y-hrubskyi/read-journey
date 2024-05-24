import toast from "react-hot-toast";

import { Icons } from "@/config/icons";
import API from "@/services/axios";
import { sortByDate } from "@/utils/sortByDate";
import { getLastReadPage } from "@/utils/getLastReadPage";
import { calcProgress } from "@/utils/calcProgress";
import { calcTime } from "@/utils/calcTime";
import { isToday } from "@/utils/isToday";

import { DetailsTitle, InfoBlock, InfoBlockHeader } from "../Details.styled";
import { DetailsNav } from "../DetailsNav/DetailsNav";

import * as SC from "./Diary.styled";

const SessionItem = ({
  session,
  totalPages,
  bookId,
  setBook,
  setDetailsType,
}) => {
  const handleRemoveReading = async () => {
    try {
      const searchParams = new URLSearchParams({
        bookId,
        readingId: session._id,
      });

      const removingReadingPromise = API.delete(
        `/books/reading?${searchParams}`
      );
      await toast.promise(removingReadingPromise, {
        loading: "Removing...",
        success: ({ data }) => {
          if (!data.progress.length) setDetailsType("progress");
          setBook(data);

          return "Reading removed from progress!";
        },
        error: (error) => error.response.data.message,
      });
    } catch (error) {
      // handled in toast.promise
    }
  };

  const readPages = session.finishPage;
  if (!readPages) return null;

  const readingProgress = calcProgress(
    session.finishPage - session.startPage,
    totalPages
  );
  const readingTime = calcTime(session.finishReading, session.startReading);
  const speed = session.speed;

  return (
    <SC.SessionItem>
      <SC.LeftBlock>
        <SC.ReadingProgress>{readingProgress}%</SC.ReadingProgress>
        <SC.ReadingInfo>
          {readingTime} {readingTime === 1 ? "minute" : "minutes"}
        </SC.ReadingInfo>
      </SC.LeftBlock>
      <SC.RightBlock>
        <SC.ChartWrapper>
          <SC.ChartIcon>
            <use href={Icons.chart}></use>
          </SC.ChartIcon>
          <SC.ReadingSpeed>
            {speed} {speed === 1 ? "page" : "pages"} per hour
          </SC.ReadingSpeed>
        </SC.ChartWrapper>
        <SC.RemoveReadingBtn
          type="button"
          onClick={handleRemoveReading}
          aria-label="remove reading session"
        >
          <SC.TrashIcon>
            <use href={Icons.trash}></use>
          </SC.TrashIcon>
        </SC.RemoveReadingBtn>
      </SC.RightBlock>
    </SC.SessionItem>
  );
};

const DiaryItem = ({
  day,
  sessions,
  totalPages,
  bookId,
  setBook,
  setDetailsType,
}) => {
  if (sessions.length === 1 && sessions[0].status === "active") {
    return null;
  }

  const readPages = getLastReadPage(sessions, totalPages);

  return (
    <SC.DiaryItem>
      <SC.ItemLabelOuter>
        <SC.ItemLabelInner />
      </SC.ItemLabelOuter>
      <SC.ItemContent>
        <SC.ItemHeader>
          <SC.Date data-is-today={isToday(day)}>{day}</SC.Date>
          <SC.ReadPages>
            {readPages} {readPages === 1 ? "page" : "pages"}
          </SC.ReadPages>
        </SC.ItemHeader>
        <SC.SessionList>
          {[...sessions].reverse().map((session) => (
            <SessionItem
              key={session._id}
              session={session}
              totalPages={totalPages}
              bookId={bookId}
              setBook={setBook}
              setDetailsType={setDetailsType}
            />
          ))}
        </SC.SessionList>
      </SC.ItemContent>
    </SC.DiaryItem>
  );
};

export const Diary = ({ book, setBook, detailsType, setDetailsType }) => {
  const { totalPages, progress } = book;

  const diaryList = sortByDate(progress);

  return (
    <InfoBlock>
      <InfoBlockHeader>
        <DetailsTitle>Diary</DetailsTitle>
        <DetailsNav detailsType={detailsType} setDetailsType={setDetailsType} />
      </InfoBlockHeader>
      <SC.DiaryListWrapper>
        <SC.DiaryList>
          {diaryList.map(([key, value]) => (
            <DiaryItem
              key={key}
              day={key}
              sessions={value}
              totalPages={totalPages}
              bookId={book._id}
              setBook={setBook}
              setDetailsType={setDetailsType}
            />
          ))}
        </SC.DiaryList>
      </SC.DiaryListWrapper>
    </InfoBlock>
  );
};
