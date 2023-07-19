import Link from "next/link";
import { Card, Col, Row, Badge, Text } from "@nextui-org/react";

interface Props {
  post: any,
}

const PostCard: React.FC<Props> = ({ post }) => (

  <Card className="post-card" isPressable css={{ background: post.frontmatter.bg_color }}>
    <Link href={`/blogs/${post.slug}`}>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={post.frontmatter.cover_image}
          width="300px"
          height="300px"
          objectFit="contain"
          alt="Cover image"
          showSkeleton
          placeholder="blur"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          margin: "0px",
          padding: "5px",
          position: "absolute",
          bgBlur: "#ffffff66",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            {/* <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
              <Badge color="primary" css={{ border: "0px" }}>Secondary</Badge>
              <Badge color="primary" css={{ border: "0px" }}>Secondary</Badge>
              <Badge color="primary" css={{ border: "0px" }}>Secondary</Badge>
            </div> */}
            <Text h2 color="#000" size={20} style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {post.frontmatter.title}
            </Text>
            <Text color="#000" size={12} style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {post.frontmatter.post_date}
            </Text>
          </Col>
        </Row>
      </Card.Footer>
    </Link>
  </Card>
);

export default PostCard;
