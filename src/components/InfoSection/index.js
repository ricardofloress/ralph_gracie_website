import React from 'react';
import { Column1, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Img, Column2, Heading, Subtitle, TextWrapper, TopLine } from './InfoElements';

const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headline, darkText, description, img, alt, buttonLabel, primary, dark, dark2 }) => {
    return (
        <InfoContainer id={id} lightBg={lightBg}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>
                                {topLine}
                            </TopLine>
                            <Heading lightText={lightText}>
                                {headline}
                            </Heading>
                            <Subtitle darkText={darkText}>
                                {description}
                            </Subtitle>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt} />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>

        </InfoContainer>
    );
};

export default InfoSection;
