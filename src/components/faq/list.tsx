import { Question } from '@/types/faq';
import { ExpandMoreOutlined } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { FC } from 'react';

interface IProps {
  questions: Question[];
}
const FaqListConponent: FC<IProps> = ({ questions }) => {
  return (
    <div className="mx-10 flex flex-col gap-2 pb-10">
      {questions.map((question) => {
        return (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreOutlined />}
              aria-controls={question.id.toString()}
              id={question.id.toString()}
              sx={{ borderBottom: '1px solid #ddd', paddingBottom: 1 }}
            >
              <Typography variant="subtitle1" fontWeight="bold" component="span">
                {question.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle2">{question.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default FaqListConponent;
