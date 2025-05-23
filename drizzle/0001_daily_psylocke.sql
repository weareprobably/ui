CREATE TABLE "posted_in" (
	"post_id" text NOT NULL,
	"tag_id" text NOT NULL,
	CONSTRAINT "posted_in_post_id_tag_id_pk" PRIMARY KEY("post_id","tag_id")
);
--> statement-breakpoint
ALTER TABLE "organizations" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "user_organizations" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "organizations" CASCADE;--> statement-breakpoint
DROP TABLE "user_organizations" CASCADE;--> statement-breakpoint
ALTER TABLE "post_authors" RENAME TO "author_of";--> statement-breakpoint
ALTER TABLE "user_channels" RENAME TO "member_of";--> statement-breakpoint
ALTER TABLE "post_tags" RENAME TO "tagged_with";--> statement-breakpoint
ALTER TABLE "users" RENAME COLUMN "username" TO "name";--> statement-breakpoint
ALTER TABLE "users" DROP CONSTRAINT "users_username_unique";--> statement-breakpoint
ALTER TABLE "channels" DROP CONSTRAINT "channels_organization_id_organizations_id_fk";
--> statement-breakpoint
ALTER TABLE "author_of" DROP CONSTRAINT "post_authors_post_id_posts_id_fk";
--> statement-breakpoint
ALTER TABLE "author_of" DROP CONSTRAINT "post_authors_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "tagged_with" DROP CONSTRAINT "post_tags_post_id_posts_id_fk";
--> statement-breakpoint
ALTER TABLE "tagged_with" DROP CONSTRAINT "post_tags_tag_id_tags_id_fk";
--> statement-breakpoint
ALTER TABLE "posts" DROP CONSTRAINT "posts_channel_id_channels_id_fk";
--> statement-breakpoint
ALTER TABLE "member_of" DROP CONSTRAINT "user_channels_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "member_of" DROP CONSTRAINT "user_channels_channel_id_channels_id_fk";
--> statement-breakpoint
ALTER TABLE "author_of" DROP CONSTRAINT "post_authors_post_id_user_id_pk";--> statement-breakpoint
ALTER TABLE "tagged_with" DROP CONSTRAINT "post_tags_post_id_tag_id_pk";--> statement-breakpoint
ALTER TABLE "member_of" DROP CONSTRAINT "user_channels_user_id_channel_id_pk";--> statement-breakpoint
ALTER TABLE "author_of" ADD CONSTRAINT "author_of_user_id_post_id_pk" PRIMARY KEY("user_id","post_id");--> statement-breakpoint
ALTER TABLE "tagged_with" ADD CONSTRAINT "tagged_with_post_id_tag_id_pk" PRIMARY KEY("post_id","tag_id");--> statement-breakpoint
ALTER TABLE "member_of" ADD CONSTRAINT "member_of_user_id_channel_id_pk" PRIMARY KEY("user_id","channel_id");--> statement-breakpoint
ALTER TABLE "posts" ADD COLUMN "name" text NOT NULL;--> statement-breakpoint
ALTER TABLE "tags" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "posted_in" ADD CONSTRAINT "posted_in_post_id_posts_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "posted_in" ADD CONSTRAINT "posted_in_tag_id_channels_id_fk" FOREIGN KEY ("tag_id") REFERENCES "public"."channels"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "author_of" ADD CONSTRAINT "author_of_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "author_of" ADD CONSTRAINT "author_of_post_id_posts_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tagged_with" ADD CONSTRAINT "tagged_with_post_id_posts_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tagged_with" ADD CONSTRAINT "tagged_with_tag_id_tags_id_fk" FOREIGN KEY ("tag_id") REFERENCES "public"."tags"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "member_of" ADD CONSTRAINT "member_of_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "member_of" ADD CONSTRAINT "member_of_channel_id_channels_id_fk" FOREIGN KEY ("channel_id") REFERENCES "public"."channels"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "channels" DROP COLUMN "organization_id";--> statement-breakpoint
ALTER TABLE "posts" DROP COLUMN "channel_id";