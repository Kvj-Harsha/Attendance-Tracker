import { TouchableOpacity, View } from 'react-native'
import { COLORS } from '../styles/theme'
import { useRoute } from '@react-navigation/native'
import { Path, Svg } from 'react-native-svg'
import { useNavigation } from '@react-navigation/native'

export default function Navbar() {
	const route = useRoute()
	const navigation = useNavigation()

	return (
		<View
			style={{
				backgroundColor: COLORS?.white,
				borderColor: COLORS?.borderGrey,
				borderTopStartRadius: 20,
				borderTopEndRadius: 20,
				borderWidth: 1,
				paddingTop: 20,
				paddingBottom: 20,
				paddingLeft: 30,
				paddingRight: 30,
				flexDirection: 'row',
				position: 'absolute',
				bottom: 0,
				justifyContent: 'space-between',
				width: '100%',
			}}
		>
			<View style={{ flexDirection: 'row' }}>
				<TouchableOpacity
					onPress={() => {
						navigation.push('Home')
					}}
					activeOpacity={0.7}
					style={{ marginRight: 42 }}
				>
					{route.name == 'Home' ? (
						<Svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<Path
								d='M20.83 8.01002L14.28 2.77002C13 1.75002 11 1.74002 9.72996 2.76002L3.17996 8.01002C2.23996 8.76002 1.66996 10.26 1.86996 11.44L3.12996 18.98C3.41996 20.67 4.98996 22 6.69996 22H17.3C18.99 22 20.59 20.64 20.88 18.97L22.14 11.43C22.32 10.26 21.75 8.76002 20.83 8.01002ZM12.75 18C12.75 18.41 12.41 18.75 12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18Z'
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
								d='M20.83 8.01002L14.28 2.77002C13 1.75002 11 1.74002 9.72996 2.76002L3.17996 8.01002C2.23996 8.76002 1.66996 10.26 1.86996 11.44L3.12996 18.98C3.41996 20.67 4.98996 22 6.69996 22H17.3C18.99 22 20.59 20.64 20.88 18.97L22.14 11.43C22.32 10.26 21.75 8.76002 20.83 8.01002ZM12.75 18C12.75 18.41 12.41 18.75 12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18Z'
								fill='#C8C8C8'  
							/>
						</Svg>
					)}
				</TouchableOpacity>
				<TouchableOpacity //mine
					onPress={() => {
						navigation.push('PopUp')
					}}
					activeOpacity={0.7}
					style={{ marginRight: 42 }}
				>
					{route.name == 'Home' ? (
					<Svg
						width='24'
						height='24'
						viewBox='0 0 30 30'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>

						<Path
							d="M15 2.5C8.1125 2.5 2.5 8.1125 2.5 15C2.5 21.8875 8.1125 27.5 15 27.5C21.8875 27.5 27.5 21.8875 27.5 15C27.5 8.1125 21.8875 2.5 15 2.5ZM14.0625 10C14.0625 9.4875 14.4875 9.0625 15 9.0625C15.5125 9.0625 15.9375 9.4875 15.9375 10V16.25C15.9375 16.7625 15.5125 17.1875 15 17.1875C14.4875 17.1875 14.0625 16.7625 14.0625 16.25V10ZM16.15 20.475C16.0875 20.6375 16 20.7625 15.8875 20.8875C15.7625 21 15.625 21.0875 15.475 21.15C15.325 21.2125 15.1625 21.25 15 21.25C14.8375 21.25 14.675 21.2125 14.525 21.15C14.375 21.0875 14.2375 21 14.1125 20.8875C14 20.7625 13.9125 20.6375 13.85 20.475C13.7858 20.3248 13.7518 20.1634 13.75 20C13.75 19.8375 13.7875 19.675 13.85 19.525C13.9125 19.375 14 19.2375 14.1125 19.1125C14.2375 19 14.375 18.9125 14.525 18.85C14.8293 18.725 15.1707 18.725 15.475 18.85C15.625 18.9125 15.7625 19 15.8875 19.1125C16 19.2375 16.0875 19.375 16.15 19.525C16.2125 19.675 16.25 19.8375 16.25 20C16.25 20.1625 16.2125 20.325 16.15 20.475Z"
							fill='black'
						/>
					</Svg>
					) : (
						<Svg
							width='24'
							height='24'
							viewBox='0 0 30 30'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>

							<Path
								d="M15 2.5C8.1125 2.5 2.5 8.1125 2.5 15C2.5 21.8875 8.1125 27.5 15 27.5C21.8875 27.5 27.5 21.8875 27.5 15C27.5 8.1125 21.8875 2.5 15 2.5ZM14.0625 10C14.0625 9.4875 14.4875 9.0625 15 9.0625C15.5125 9.0625 15.9375 9.4875 15.9375 10V16.25C15.9375 16.7625 15.5125 17.1875 15 17.1875C14.4875 17.1875 14.0625 16.7625 14.0625 16.25V10ZM16.15 20.475C16.0875 20.6375 16 20.7625 15.8875 20.8875C15.7625 21 15.625 21.0875 15.475 21.15C15.325 21.2125 15.1625 21.25 15 21.25C14.8375 21.25 14.675 21.2125 14.525 21.15C14.375 21.0875 14.2375 21 14.1125 20.8875C14 20.7625 13.9125 20.6375 13.85 20.475C13.7858 20.3248 13.7518 20.1634 13.75 20C13.75 19.8375 13.7875 19.675 13.85 19.525C13.9125 19.375 14 19.2375 14.1125 19.1125C14.2375 19 14.375 18.9125 14.525 18.85C14.8293 18.725 15.1707 18.725 15.475 18.85C15.625 18.9125 15.7625 19 15.8875 19.1125C16 19.2375 16.0875 19.375 16.15 19.525C16.2125 19.675 16.25 19.8375 16.25 20C16.25 20.1625 16.2125 20.325 16.15 20.475Z"
								fill='#C8C8C8'
							/>
					</Svg>
					)}
				</TouchableOpacity>
				
				<TouchableOpacity
					onPress={() => {
						navigation.push('Import')
					}}
					activeOpacity={0.7}
				>
					{route.name == 'Import' ? (
						<Svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<Path
								d='M16.8 9H12.75V13.44L14.82 11.37C14.97 11.22 15.16 11.15 15.35 11.15C15.54 11.15 15.73 11.22 15.88 11.37C16.17 11.66 16.17 12.14 15.88 12.43L12.53 15.78C12.24 16.07 11.76 16.07 11.47 15.78L8.12 12.43C7.98052 12.2889 7.9023 12.0984 7.9023 11.9C7.9023 11.7016 7.98052 11.5111 8.12 11.37C8.41 11.08 8.89 11.08 9.18 11.37L11.25 13.44V9H7.2C4 9 2 11 2 14.2V16.79C2 20 4 22 7.2 22H16.79C19.99 22 21.99 20 21.99 16.8V14.2C22 11 20 9 16.8 9ZM12.75 2.75C12.75 2.34 12.41 2 12 2C11.59 2 11.25 2.34 11.25 2.75V9H12.75V2.75Z'
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
								d='M16.8 9H12.75V13.44L14.82 11.37C14.97 11.22 15.16 11.15 15.35 11.15C15.54 11.15 15.73 11.22 15.88 11.37C16.17 11.66 16.17 12.14 15.88 12.43L12.53 15.78C12.24 16.07 11.76 16.07 11.47 15.78L8.12 12.43C7.98052 12.2889 7.9023 12.0984 7.9023 11.9C7.9023 11.7016 7.98052 11.5111 8.12 11.37C8.41 11.08 8.89 11.08 9.18 11.37L11.25 13.44V9H7.2C4 9 2 11 2 14.2V16.79C2 20 4 22 7.2 22H16.79C19.99 22 21.99 20 21.99 16.8V14.2C22 11 20 9 16.8 9ZM12.75 2.75C12.75 2.34 12.41 2 12 2C11.59 2 11.25 2.34 11.25 2.75V9H12.75V2.75Z'
								fill='#C8C8C8'
							/>
						</Svg>
					)}
				</TouchableOpacity>
			</View>
			<TouchableOpacity
				onPress={() => {
					navigation.push('Mark')
				}}
				activeOpacity={0.7}
				style={{
					position: 'absolute',
					top: -33,
					right: '50%',
					backgroundColor: COLORS.blue,
					borderRadius: 100,
					height: 64,
					width: 64,
					justifyContent: 'center',
					alignItems: 'center',
					elevation: 3,
				}}
			>
				<Svg
					width='30'
					height='30'
					viewBox='0 0 30 30'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<Path
						d='M20.9375 4.45V2.5C20.9375 1.9875 20.5125 1.5625 20 1.5625C19.4875 1.5625 19.0625 1.9875 19.0625 2.5V4.375H10.9375V2.5C10.9375 1.9875 10.5125 1.5625 10 1.5625C9.48754 1.5625 9.06254 1.9875 9.06254 2.5V4.45C5.68754 4.7625 4.05004 6.775 3.80004 9.7625C3.77504 10.125 4.07504 10.425 4.42504 10.425H25.575C25.9375 10.425 26.2375 10.1125 26.2 9.7625C25.95 6.775 24.3125 4.7625 20.9375 4.45ZM23.75 18.75C20.9875 18.75 18.75 20.9875 18.75 23.75C18.75 24.6875 19.0125 25.575 19.475 26.325C19.9157 27.0656 20.5416 27.6787 21.2912 28.1039C22.0408 28.5291 22.8882 28.7518 23.75 28.75C25.575 28.75 27.1625 27.775 28.025 26.325C28.4875 25.575 28.75 24.6875 28.75 23.75C28.75 20.9875 26.5125 18.75 23.75 18.75ZM26.3375 23.2125L23.675 25.675C23.5 25.8375 23.2625 25.925 23.0375 25.925C22.8 25.925 22.5625 25.8375 22.375 25.65L21.1375 24.4125C20.9632 24.2361 20.8654 23.998 20.8654 23.75C20.8654 23.502 20.9632 23.2639 21.1375 23.0875C21.5 22.725 22.1 22.725 22.4625 23.0875L23.0625 23.6875L25.0625 21.8375C25.4375 21.4875 26.0375 21.5125 26.3875 21.8875C26.7375 22.2625 26.7125 22.85 26.3375 23.2125Z'
						fill='white'
					/>
					<Path
						d='M25 12.3H5C4.3125 12.3 3.75 12.8625 3.75 13.55V21.25C3.75 25 5.625 27.5 10 27.5H16.1625C17.025 27.5 17.625 26.6625 17.35 25.85C17.1 25.125 16.8875 24.325 16.8875 23.75C16.8875 19.9625 19.975 16.875 23.7625 16.875C24.125 16.875 24.4875 16.9 24.8375 16.9625C25.5875 17.075 26.2625 16.4875 26.2625 15.7375V13.5625C26.2592 13.2287 26.1252 12.9094 25.8891 12.6734C25.6531 12.4373 25.3338 12.3032 25 12.3ZM11.5125 22.7625C11.275 22.9875 10.95 23.125 10.625 23.125C10.3 23.125 9.975 22.9875 9.7375 22.7625C9.5125 22.525 9.375 22.2 9.375 21.875C9.375 21.55 9.5125 21.225 9.7375 20.9875C9.8625 20.875 9.9875 20.7875 10.15 20.725C10.6125 20.525 11.1625 20.6375 11.5125 20.9875C11.7375 21.225 11.875 21.55 11.875 21.875C11.875 22.2 11.7375 22.525 11.5125 22.7625ZM11.5125 18.3875L11.325 18.5375C11.25 18.5875 11.175 18.625 11.1 18.65C11.025 18.6875 10.95 18.7125 10.875 18.725C10.7875 18.7375 10.7 18.75 10.625 18.75C10.3 18.75 9.975 18.6125 9.7375 18.3875C9.5125 18.15 9.375 17.825 9.375 17.5C9.375 17.175 9.5125 16.85 9.7375 16.6125C10.025 16.325 10.4625 16.1875 10.875 16.275C10.95 16.2875 11.025 16.3125 11.1 16.35C11.175 16.375 11.25 16.4125 11.325 16.4625L11.5125 16.6125C11.7375 16.85 11.875 17.175 11.875 17.5C11.875 17.825 11.7375 18.15 11.5125 18.3875ZM15.8875 18.3875C15.65 18.6125 15.325 18.75 15 18.75C14.675 18.75 14.35 18.6125 14.1125 18.3875C13.8875 18.15 13.75 17.825 13.75 17.5C13.75 17.175 13.8875 16.85 14.1125 16.6125C14.5875 16.15 15.425 16.15 15.8875 16.6125C16.1125 16.85 16.25 17.175 16.25 17.5C16.25 17.825 16.1125 18.15 15.8875 18.3875Z'
						fill='white'
					/>
				</Svg>
			</TouchableOpacity>
			<View style={{ flexDirection: 'row' }}>
				<TouchableOpacity
					onPress={() => {
						navigation.push('Export')
					}}
					activeOpacity={0.7}
					style={{ marginRight: 42 }}
				>
					{route.name == 'Export' ? (
						<Svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<Path
								d='M16.8 9H12.75V15.25C12.75 15.66 12.41 16 12 16C11.59 16 11.25 15.66 11.25 15.25V9H7.2C4 9 2 11 2 14.2V16.79C2 20 4 22 7.2 22H16.79C19.99 22 21.99 20 21.99 16.8V14.2C22 11 20 9 16.8 9Z'
								fill='black'
							/>
							<Path
								d='M12.7501 4.561L14.8201 6.631C14.9701 6.781 15.1601 6.851 15.3501 6.851C15.5401 6.851 15.7301 6.781 15.8801 6.631C16.1701 6.341 16.1701 5.861 15.8801 5.571L12.5301 2.221C12.389 2.08152 12.1985 2.0033 12.0001 2.0033C11.8017 2.0033 11.6112 2.08152 11.4701 2.221L8.12009 5.571C7.83009 5.861 7.83009 6.341 8.12009 6.631C8.41009 6.921 8.89009 6.921 9.18009 6.631L11.2501 4.561V9.001H12.7501V4.561Z'
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
								d='M16.8 9H12.75V15.25C12.75 15.66 12.41 16 12 16C11.59 16 11.25 15.66 11.25 15.25V9H7.2C4 9 2 11 2 14.2V16.79C2 20 4 22 7.2 22H16.79C19.99 22 21.99 20 21.99 16.8V14.2C22 11 20 9 16.8 9Z'
								fill='#C8C8C8'
							/>
							<Path
								d='M12.7501 4.561L14.8201 6.631C14.9701 6.781 15.1601 6.851 15.3501 6.851C15.5401 6.851 15.7301 6.781 15.8801 6.631C16.1701 6.341 16.1701 5.861 15.8801 5.571L12.5301 2.221C12.389 2.08152 12.1985 2.0033 12.0001 2.0033C11.8017 2.0033 11.6112 2.08152 11.4701 2.221L8.12009 5.571C7.83009 5.861 7.83009 6.341 8.12009 6.631C8.41009 6.921 8.89009 6.921 9.18009 6.631L11.2501 4.561V9.001H12.7501V4.561Z'
								fill='#C8C8C8'
							/>
						</Svg>
					)}
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						navigation.push('Db')
					}}
					activeOpacity={0.7}
				>
					{route.name == 'Db' ? (
						<Svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<Path
								d='M19.32 2H4.68C3.21 2 2 3.21 2 4.68V7.31C2 8.79 3.21 10 4.68 10H19.31C20.79 10 22 8.79 22 7.32V4.68C22 3.21 20.79 2 19.32 2ZM6.75 7C6.75 7.41 6.41 7.75 6 7.75C5.59 7.75 5.25 7.41 5.25 7V5C5.25 4.59 5.59 4.25 6 4.25C6.41 4.25 6.75 4.59 6.75 5V7ZM10.75 7C10.75 7.41 10.41 7.75 10 7.75C9.59 7.75 9.25 7.41 9.25 7V5C9.25 4.59 9.59 4.25 10 4.25C10.41 4.25 10.75 4.59 10.75 5V7ZM18 6.75H14C13.59 6.75 13.25 6.41 13.25 6C13.25 5.59 13.59 5.25 14 5.25H18C18.41 5.25 18.75 5.59 18.75 6C18.75 6.41 18.41 6.75 18 6.75ZM19.32 14H4.68C3.21 14 2 15.21 2 16.68V19.31C2 20.79 3.21 22 4.68 22H19.31C20.79 22 21.99 20.79 21.99 19.32V16.69C21.9913 16.3381 21.9233 15.9893 21.7898 15.6636C21.6564 15.338 21.4601 15.0418 21.2121 14.792C20.9642 14.5422 20.6695 14.3437 20.3448 14.2078C20.0202 14.0719 19.6719 14.0013 19.32 14ZM6.75 19C6.75 19.41 6.41 19.75 6 19.75C5.59 19.75 5.25 19.41 5.25 19V17C5.25 16.59 5.59 16.25 6 16.25C6.41 16.25 6.75 16.59 6.75 17V19ZM10.75 19C10.75 19.41 10.41 19.75 10 19.75C9.59 19.75 9.25 19.41 9.25 19V17C9.25 16.59 9.59 16.25 10 16.25C10.41 16.25 10.75 16.59 10.75 17V19ZM18 18.75H14C13.59 18.75 13.25 18.41 13.25 18C13.25 17.59 13.59 17.25 14 17.25H18C18.41 17.25 18.75 17.59 18.75 18C18.75 18.41 18.41 18.75 18 18.75Z'
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
								d='M19.32 2H4.68C3.21 2 2 3.21 2 4.68V7.31C2 8.79 3.21 10 4.68 10H19.31C20.79 10 22 8.79 22 7.32V4.68C22 3.21 20.79 2 19.32 2ZM6.75 7C6.75 7.41 6.41 7.75 6 7.75C5.59 7.75 5.25 7.41 5.25 7V5C5.25 4.59 5.59 4.25 6 4.25C6.41 4.25 6.75 4.59 6.75 5V7ZM10.75 7C10.75 7.41 10.41 7.75 10 7.75C9.59 7.75 9.25 7.41 9.25 7V5C9.25 4.59 9.59 4.25 10 4.25C10.41 4.25 10.75 4.59 10.75 5V7ZM18 6.75H14C13.59 6.75 13.25 6.41 13.25 6C13.25 5.59 13.59 5.25 14 5.25H18C18.41 5.25 18.75 5.59 18.75 6C18.75 6.41 18.41 6.75 18 6.75ZM19.32 14H4.68C3.21 14 2 15.21 2 16.68V19.31C2 20.79 3.21 22 4.68 22H19.31C20.79 22 21.99 20.79 21.99 19.32V16.69C21.9913 16.3381 21.9233 15.9893 21.7898 15.6636C21.6564 15.338 21.4601 15.0418 21.2121 14.792C20.9642 14.5422 20.6695 14.3437 20.3448 14.2078C20.0202 14.0719 19.6719 14.0013 19.32 14ZM6.75 19C6.75 19.41 6.41 19.75 6 19.75C5.59 19.75 5.25 19.41 5.25 19V17C5.25 16.59 5.59 16.25 6 16.25C6.41 16.25 6.75 16.59 6.75 17V19ZM10.75 19C10.75 19.41 10.41 19.75 10 19.75C9.59 19.75 9.25 19.41 9.25 19V17C9.25 16.59 9.59 16.25 10 16.25C10.41 16.25 10.75 16.59 10.75 17V19ZM18 18.75H14C13.59 18.75 13.25 18.41 13.25 18C13.25 17.59 13.59 17.25 14 17.25H18C18.41 17.25 18.75 17.59 18.75 18C18.75 18.41 18.41 18.75 18 18.75Z'
								fill='#C8C8C8'
							/>
						</Svg>
					)}
				</TouchableOpacity>
			</View>
		</View>
	)
}
