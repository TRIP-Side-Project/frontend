//프로필 조회
export interface MyPageTypes {
	email: string;
	nickname: string;
	intro: string | null;
	profileImg: string;
	createdAt: string;
	articleCount: number;
	commentCount: number;
	likeItemCount: number;
	tags: string[];
}

export interface MyDataProps {
	data: MyPageTypes;
}

//보관 상품
export interface LikeMerchanTypes {
	id: number;
	productId: number;
	title: string;
	shopName: string;
	buyUrl: string;
	maxPrice: number;
	minPrice: number;
	writerNickname: string;
}

export interface LikeMerchanProps {
	data: LikeMerchanTypes;
}

//내가 쓴 게시글
export interface WroteForumTypes {
	articleId: number;
	title: string;
	writerId: number;
	writerNickname: string;
	writerRole: string;
	createdAt: string;
}

export interface WroteForumProps {
	data: WroteForumTypes;
}

//내가 쓴 댓글
export interface MyCommentTypes {
	commentId: number;
	writerId: number;
	writerNickname: string;
	writerProfileImg: string;
	articleId: number;
	content: string;
	parentId: number;
	createdAt: string;
}

export interface MyCommentProps {
	data: MyCommentTypes;
}

//보관 게시글
export interface LikeForumTypes {
	articleId: number;
	title: string;
	writerId: number;
	writerNickname: string;
	writerRole: string;
	createdAt: string;
}

export interface LikeForumProps {
	data: LikeForumTypes;
}
