import { visualCheck } from 'visual-check-testcafe';
 
fixture `TestCafe tests with Visual compare`
    .page `https://www.google.com`;
 
const options_Safari = {
  "label" : "Test snapshot Safari",
  "timeout" : 2000,
  "maxDiffPercentage" : 0.1
}

test('Automated visual testing - Safari', async t => {
  await visualCheck(t, options_Safari)
})
