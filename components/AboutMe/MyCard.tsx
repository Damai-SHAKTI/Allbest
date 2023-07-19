import { Avatar, Text } from "@nextui-org/react"
import Link from "next/link"

const MyCard = () => {
  return (
    <div className="right-card">
      <div style={{ height: "50%", display: "flex", alignItems: "center", justifyItems: "center" }}>
        <img 
          width="100px" 
          height="100px" 
          src="/logo.png"
          alt="Allbest logo"
          style={{ margin: "auto", borderRadius: "999px" }}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <Text
          size={20}
          css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%",
          }}
          weight="bold"
        >
          Allbest
        </Text>
        <p style={{ fontWeight: '500' }}>
          Self taught programmer and tech lover. 
          I love coding and exploring technology.
        </p>

        <div style={{ marginTop: "5px", gap: "10px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
          <Link href="https://www.instagram.com/allbest963/" target="_blank">
            <Avatar
              size="md"
              src="/social-media/instagram.png"
              color="secondary"
              alt="Instagram logo"
              bordered
              pointer
            />
          </Link>
          <Link href="https://youtube.com/@allbest963" target="_blank">
            <Avatar
              size="md"
              src="/social-media/youtube.png"
              color="secondary"
              alt="youtube logo"
              bordered
              pointer
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MyCard