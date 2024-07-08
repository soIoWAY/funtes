interface ITestLayout {
	children: React.ReactNode
}

export default function TestLayout({ children }: ITestLayout) {
	return <div>{children}</div>
}
