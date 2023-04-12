import { TestId } from '../helpers/test-id';
import { VisualRegression } from '../helpers/visual-regression';

VisualRegression.addCommands();
TestId.addCommands();

after(() => {
	VisualRegression.generateReport();
});
