import Image from 'next/image'

export const Logo = () => {
	return (
		<Image
			src="/next.svg"
			alt="logo"
			width={120}
			height={80}
			className="max-w-[5rem] dark:invert dark:filter"
		/>
	)
}
