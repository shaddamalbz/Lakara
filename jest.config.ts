export default {
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
}
