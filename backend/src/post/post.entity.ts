import {
	Table,
	Column,
	Model,
	DataType,
	Default,
	ForeignKey,
	BelongsTo,
} from 'sequelize-typescript';
import { User } from '../user/user.entity';

@Table
export class Post extends Model {
	@Column({
		type: DataType.UUID,
		defaultValue: DataType.UUIDV4,
		allowNull: false,
		primaryKey: true,
	})
	id: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	title: string;

	@Column({
		type: DataType.TEXT,
		allowNull: false,
	})
	content: string;

	@Default('')
	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	description: string;

	@Default(
		'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/330px-Placeholder_view_vector.svg.png',
	)
	@Column({
		type: DataType.TEXT,
		allowNull: false,
	})
	previewImgUrl: string;

	@ForeignKey(() => User)
	@Column({
		type: DataType.UUID,
		allowNull: false,
	})
	userId: string;

	@BelongsTo(() => User)
	user: User;

	@Default(0)
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	views: number;

	@Default(0)
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	likes: number;

	@Column({
		type: DataType.STRING,
		allowNull: false,
		unique: true,
	})
	slug: string;

	@Default([])
	@Column({
		type: DataType.ARRAY(DataType.STRING),
		allowNull: false,
	})
	comments: string[];

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	category: string;

	@Default([])
	@Column({
		type: DataType.ARRAY(DataType.STRING),
		allowNull: false,
	})
	tags: string[];

	@Column({
		type: DataType.DATE,
		allowNull: false,
	})
	createdAt: Date;

	@Column({
		type: DataType.DATE,
		allowNull: false,
	})
	updatedAt: Date;
}
