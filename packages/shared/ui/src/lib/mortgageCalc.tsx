// packages/shared/ui/src/lib/mortgageCalc.tsx
import { Button, Heading, TextField } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { calculateMortgage } from '@banking-web-apps/mortgage-lib';
import { useState } from 'react';

export const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [currency, setCurrency] = useState('USD');
  const [monthlyPayment, setMonthlyPayment] = useState('');

  const calculate = () => {
    const payment = calculateMortgage({
      homePrice,
      downPayment,
      interestRate,
      loanTerm,
      currency,
    });
    setMonthlyPayment(payment);
  };

  return (
    <div>
      <Heading width="30vw" level={3}>
        Mortgage Calculator
      </Heading>
      <br />
      <br />
      <TextField
        label="Home price"
        type="number"
        value={homePrice}
        onChange={(e) => setHomePrice(e.target.valueAsNumber)}
      />
      <TextField
        label="Down payment"
        type="number"
        value={downPayment}
        onChange={(e) => setDownPayment(e.target.valueAsNumber)}
      />
      <TextField
        label="Interest rate"
        type="number"
        value={interestRate}
        onChange={(e) => setInterestRate(e.target.valueAsNumber)}
      />
      <TextField
        label="Loan term (years)"
        type="number"
        value={loanTerm}
        onChange={(e) => setLoanTerm(e.target.valueAsNumber)}
      />
      <br />
      <br />
      <Button onClick={calculate}>Calculate</Button>
      <br />
      <br />
      {monthlyPayment && (
        <Heading width="30vw" level={5}>
          Monthly payment: ${monthlyPayment}
        </Heading>
      )}
    </div>
  );
};
