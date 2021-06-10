import { visualCheck } from 'visual-check-testcafe';
 
fixture `TestCafe tests with Visual compare`
    .page `https://www.google.com`;
 
const options_Chrome = {
    "label" : "Test snapshot Chrome",
    "timeout" : 2000,
    "maxDiffPercentage" : 0.1
}

test('Automated visual testing -- Chrome', async t => {
  await visualCheck(t, options_Chrome);
});

