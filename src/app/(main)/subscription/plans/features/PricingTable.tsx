import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

const PricingTable = memo(() => {
  return (
    <Flexbox align={'center'} gap={10} horizontal>
      <script async src="https://js.stripe.com/v3/pricing-table.js" />
      <stripe-pricing-table
        pricing-table-id="prctbl_1PtOB5RozDkVa4P7e9GYlvuC"
        publishable-key="pk_test_51Pse3RRozDkVa4P7nCOov5Rmup1o9yxieewgeRzKWOOIhkBCGXrK07lbTBIPk68eTngUkN0qpVTg4yiykPN0OvhK00EeQnjqGs"
      ></stripe-pricing-table>
      <stripe-pricing-table
        pricing-table-id="prctbl_1PtLDhRozDkVa4P7AXWobrh5"
        publishable-key="pk_test_51Pse3RRozDkVa4P7nCOov5Rmup1o9yxieewgeRzKWOOIhkBCGXrK07lbTBIPk68eTngUkN0qpVTg4yiykPN0OvhK00EeQnjqGs"
      ></stripe-pricing-table>
      <stripe-pricing-table
        pricing-table-id="prctbl_1PtOkWRozDkVa4P7YLs5yzij"
        publishable-key="pk_test_51Pse3RRozDkVa4P7nCOov5Rmup1o9yxieewgeRzKWOOIhkBCGXrK07lbTBIPk68eTngUkN0qpVTg4yiykPN0OvhK00EeQnjqGs"
      ></stripe-pricing-table>
    </Flexbox>
  );
});

export default PricingTable;
