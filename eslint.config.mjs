import { js, ts } from '@opi_pib/eslint-config-base';

const ignores = ['dist/**', 'test-results/**', 'projects/e2e-app/translations/**', 'projects/e2e-app/src/assets/**'];

/** @type {import("eslint").Linter.Config[]} */
export default [
	{
		...js,
		ignores
	},
	{
		...ts,
		ignores
	}
];
