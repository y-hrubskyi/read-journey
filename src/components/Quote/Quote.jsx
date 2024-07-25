import * as SC from './Quote.styled';

export const Quote = () => {
  return (
    <SC.QuoteWrapper>
      <SC.BooksIcons />
      <SC.QuoteText>
        &quot;Books are <SC.AccentText>windows</SC.AccentText> to the world, and
        reading is a journey into the unknown.&quot;
      </SC.QuoteText>
    </SC.QuoteWrapper>
  );
};
