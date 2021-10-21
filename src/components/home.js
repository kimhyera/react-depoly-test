import React from 'react';

const Home = (props) => {
	return (
		<main>
			<div className="container">
				<h2>Single Page Apps for GitHub Pages</h2>

				<section>
					GitHub server에 배포된 React 싱글페이지 입니다. <br />
					상단링크로 이동하여 페이지를 새로 고치거나 URL을 복사/붙여넣기하여
					오류나는 현상 (404에러)은
					<br />
					GitHub Server 에서 제공되는 redirect 기능으로 테스트 하였습니다.
					<p>업데이트 확인 </p>
				</section>
			</div>
		</main>
	);
};

export default Home;
