import asyncio
from sqlmodel import select
from app.database import async_session
from app.models.wing import Wing

async def update_wings():
    wings_data = [
        {
            "slug": "codezero",
            "name": "CodeZero",
            "about": "CodeZero is the technical coding wing of Anvaya, designed to cultivate a strong problem-solving and innovation-driven community. It focuses on coding excellence, algorithmic thinking, and real-world development through challenges, workshops, and interdisciplinary projects.",
            "vision": "To cultivate a dynamic community of passionate learners, empowering them to excel in coding, problem-solving, and innovation, shaping responsible professionals ready to drive technological advancements for a smarter, inclusive, and ethical society.",
            "mission": "1. To foster an interactive and collaborative learning environment with a focus on coding challenges, development projects, and real-world problem-solving.\n2. To inspire creativity and innovation through interdisciplinary projects and research initiatives that drive meaningful solutions.\n3. To instil a sense of responsibility, ethical practices, and community impact in every member, ensuring they contribute positively to society.",
        },
        {
            "slug": "kalavaibhava",
            "name": "Kalavaibhava",
            "about": "KalaVaibhava is the cultural wing of Anvaya, dedicated to celebrating creativity, diversity, and artistic expression. It provides a dynamic platform for students to showcase talents in music, dance, literature, drama, and other cultural domains.",
            "vision": "To celebrate creativity and cultural diversity by nurturing artistic expression, confidence, and unity among students, contributing to a vibrant and inclusive campus culture within Anvaya.",
            "mission": "1. To provide a dynamic platform for students to express creativity and artistic talents through diverse cultural and literary activities.\n2. To promote cultural awareness, inclusivity, and appreciation of heritage while embracing contemporary forms of expression.\n3. To foster teamwork, leadership, and communication skills through collaborative cultural initiatives and events.\n4. To enhance campus engagement and social harmony by organizing cultural programs that encourage participation and community bonding.",
        },
        {
            "slug": "shespark",
            "name": "SheSpark",
            "about": "SheSpark is the women empowerment wing of Anvaya, dedicated to fostering an inclusive environment where women students can grow as confident technologists, leaders, and innovators. It provides a supportive platform for technical upskilling through workshops, collaborative projects, mentorship, and peer learning.",
            "vision": "To inspire and empower women students to emerge as confident leaders, innovators, and ethical professionals, fostering inclusivity and excellence in emerging technologies under the Anvaya student community.",
            "mission": "1. To create a safe, inclusive, and supportive platform that encourages women students to explore, learn, and grow through hands-on and collaborative activities.\n2. To enhance technical competence and problem-solving skills by engaging in projects, workshops, and peer learning initiatives.\n3. To nurture leadership, confidence, and professional ethics among women through mentorship, teamwork, and role-model interactions.\n4. To promote industry exposure, research orientation, and societal engagement by connecting members with experts, competitions, and outreach programs.",
        },
        {
            "slug": "uthsaha",
            "name": "Uthsaha",
            "about": "Uthsaha is the sports wing of Anvaya, focused on fostering physical fitness, teamwork, and discipline among students. It promotes a balanced academic life by encouraging participation in sports and fitness activities that enhance both physical and mental well-being.",
            "vision": "To foster a vibrant sporting culture that promotes physical fitness, teamwork, discipline, and sportsmanship, nurturing well-rounded individuals within the Anvaya student community.",
            "mission": "1. To encourage active participation in sports and fitness activities that enhance physical and mental well-being.\n2. To develop team spirit, leadership, and discipline through organized sports events, competitions, and training programs.\n3. To provide opportunities for students to identify, nurture, and showcase sporting talent at various levels.\n4. To promote ethical conduct, inclusivity, and sportsmanship, contributing to a healthy and collaborative campus environment.",
        },
    ]

    async with async_session() as session:
        for data in wings_data:
            # Check if wing exists by slug
            statement = select(Wing).where(Wing.slug == data["slug"])
            result = await session.execute(statement)
            wing = result.scalars().first()

            if wing:
                print(f"Updating wing: {data['name']}")
                wing.name = data["name"]
                wing.about = data["about"]
                wing.vision = data["vision"]
                wing.mission = data["mission"]
                session.add(wing)
            else:
                # Special case: replace udbhava with uthsaha if slug is different but it's the target
                if data["slug"] == "uthsaha":
                    statement = select(Wing).where(Wing.slug == "udbhava")
                    result = await session.execute(statement)
                    udbhava = result.scalars().first()
                    if udbhava:
                        print(f"Replacing Udbhava with Uthsaha")
                        udbhava.name = data["name"]
                        udbhava.slug = data["slug"]
                        udbhava.about = data["about"]
                        udbhava.vision = data["vision"]
                        udbhava.mission = data["mission"]
                        session.add(udbhava)
                    else:
                        print(f"Creating new wing: {data['name']}")
                        new_wing = Wing(**data)
                        session.add(new_wing)
                else:
                    print(f"Creating new wing: {data['name']}")
                    new_wing = Wing(**data)
                    session.add(new_wing)

        await session.commit()
        print("✓ Successfully updated wings data!")

if __name__ == "__main__":
    asyncio.run(update_wings())
