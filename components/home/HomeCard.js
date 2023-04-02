import { Image, Text, View } from 'react-native'
import { Path, Svg } from 'react-native-svg'
import { COLORS, FONTS } from '../../styles/theme'

export default function HomeCard({ count, isCourse = false }) {
	return (
		<View
			style={{
				height: 160,
				width: 140,
				paddingTop: 23,
				backgroundColor: COLORS?.white,
				borderRadius: 20,
				alignItems: 'center',
				elevation: 5,
			}}
		>
			<View
				style={{
					height: 54,
					width: 54,
					borderRadius: 100,
					backgroundColor: '#FAFAFE',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{isCourse ? (
					<Svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<Path
							d='M21.091 6.98002C20.241 6.04002 18.821 5.57002 16.761 5.57002H16.521V5.53002C16.521 3.85002 16.521 1.77002 12.761 1.77002H11.241C7.48101 1.77002 7.48101 3.86002 7.48101 5.53002V5.58002H7.24101C5.17101 5.58002 3.76101 6.05002 2.91101 6.99002C1.92101 8.09002 1.95101 9.57002 2.05101 10.58L2.06101 10.65L2.13801 11.463C2.15301 11.613 2.23301 11.748 2.35901 11.83C2.59901 11.987 3.00001 12.246 3.24101 12.38C3.38101 12.47 3.53101 12.55 3.68101 12.63C5.39101 13.57 7.27101 14.2 9.18101 14.51C9.27101 15.45 9.68101 16.55 11.871 16.55C14.061 16.55 14.491 15.46 14.561 14.49C16.601 14.16 18.571 13.45 20.351 12.41C20.411 12.38 20.451 12.35 20.501 12.32C20.898 12.095 21.309 11.819 21.684 11.548C21.7398 11.5076 21.7866 11.4559 21.8212 11.3963C21.8558 11.3367 21.8776 11.2705 21.885 11.202L21.901 11.059L21.951 10.589C21.961 10.529 21.961 10.479 21.971 10.409C22.051 9.39902 22.031 8.02002 21.091 6.98002ZM13.091 13.83C13.091 14.89 13.091 15.05 11.861 15.05C10.631 15.05 10.631 14.86 10.631 13.84V12.58H13.091V13.83ZM8.91101 5.57002V5.53002C8.91101 3.83002 8.91101 3.20002 11.241 3.20002H12.761C15.091 3.20002 15.091 3.84002 15.091 5.53002V5.58002H8.91101V5.57002Z'
							fill='black'
						/>
						<Path
							d='M20.8728 13.735C20.9537 13.6965 21.0432 13.68 21.1324 13.6872C21.2217 13.6944 21.3074 13.725 21.3811 13.7759C21.4547 13.8268 21.5136 13.8962 21.5519 13.9772C21.5901 14.0581 21.6063 14.1477 21.5988 14.237L21.2388 18.191C21.0288 20.191 20.2088 22.231 15.8088 22.231H8.18982C3.78982 22.231 2.96982 20.191 2.75982 18.201L2.41982 14.453C2.41226 14.3646 2.42793 14.2759 2.46529 14.1955C2.50265 14.1151 2.56039 14.0459 2.63279 13.9947C2.70518 13.9436 2.7897 13.9122 2.87794 13.9039C2.96619 13.8955 3.0551 13.9103 3.13582 13.947C4.27582 14.463 6.37782 15.377 7.67682 15.717C7.7579 15.739 7.83311 15.7786 7.89707 15.8331C7.96104 15.8875 8.01217 15.9554 8.04682 16.032C8.65382 17.33 9.96982 18.021 11.8708 18.021C13.7528 18.021 15.0858 17.303 15.6948 16.002C15.7295 15.9255 15.7807 15.8576 15.8446 15.8031C15.9086 15.7487 15.9838 15.709 16.0648 15.687C17.4438 15.324 19.6828 14.302 20.8748 13.735H20.8728Z'
							fill='black'
						/>
					</Svg>
				) : (
					<Svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<Path
							d='M14.9298 2.5V8.4C14.9298 8.84 14.4098 9.06 14.0898 8.77L12.3398 7.16C12.2478 7.07337 12.1262 7.02513 11.9998 7.02513C11.8734 7.02513 11.7518 7.07337 11.6598 7.16L9.90982 8.76C9.58982 9.06 9.06982 8.83 9.06982 8.4V2.5C9.06982 2.22 9.28982 2 9.56982 2H14.4298C14.7098 2 14.9298 2.22 14.9298 2.5Z'
							fill='black'
						/>
						<Path
							d='M16.98 2.05903C16.69 2.01903 16.43 2.26903 16.43 2.55903V8.57903C16.43 9.33903 15.98 10.029 15.28 10.339C14.58 10.639 13.77 10.509 13.21 9.98903L12.34 9.18903C12.248 9.1024 12.1264 9.05416 12 9.05416C11.8736 9.05416 11.752 9.1024 11.66 9.18903L10.79 9.98903C10.43 10.329 9.96 10.499 9.49 10.499C9.22498 10.5 8.9627 10.4455 8.72 10.339C8.02 10.029 7.57 9.33903 7.57 8.57903V2.55903C7.57 2.26903 7.31 2.01903 7.02 2.05903C4.22 2.40903 3 4.29903 3 6.99903V16.999C3 19.999 4.5 21.999 8 21.999H16C19.5 21.999 21 19.999 21 16.999V6.99903C21 4.29903 19.78 2.40903 16.98 2.05903ZM17.5 18.749H9C8.59 18.749 8.25 18.409 8.25 17.999C8.25 17.589 8.59 17.249 9 17.249H17.5C17.91 17.249 18.25 17.589 18.25 17.999C18.25 18.409 17.91 18.749 17.5 18.749ZM17.5 14.749H13.25C12.84 14.749 12.5 14.409 12.5 13.999C12.5 13.589 12.84 13.249 13.25 13.249H17.5C17.91 13.249 18.25 13.589 18.25 13.999C18.25 14.409 17.91 14.749 17.5 14.749Z'
							fill='black'
						/>
					</Svg>
				)}
			</View>
			<View style={{ gap: 10, alignItems: 'center', paddingTop: 10 }}>
				<Text style={{ fontSize: 28, fontFamily: FONTS?.bold, lineHeight: 34 }}>{count}</Text>
				{isCourse ? (
					<Text style={{ fontSize: 12, fontFamily: FONTS?.regular, lineHeight: 14, paddingTop: 2 }}>
						Courses
					</Text>
				) : (
					<Text style={{ fontSize: 12, fontFamily: FONTS?.regular, lineHeight: 14, paddingTop: 2 }}>
						Batches
					</Text>
				)}
			</View>
		</View>
	)
}
