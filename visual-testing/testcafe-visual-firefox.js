import { visualCheck } from 'visual-check-testcafe';
 
fixture `TestCafe tests with Visual compare`
    .page `https://www.google.com`;
 
const options_Firefox = {
  "label" : "Test snapshot Firefox",
  "timeout" : 2000,
  "maxDiffPercentage" : 0.1
}

test('Automated visual testing - Firefox', async t => {
  await visualCheck(t, options_Firefox)
})
