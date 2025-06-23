# VideoDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | 동영상 고유번호(PK) | [optional] [default to undefined]
**title** | **string** | 동영상 제목 | [default to undefined]
**description** | **string** | 동영상 설명 | [optional] [default to undefined]
**thumbnailUrl** | **string** | 썸네일 이미지 URL | [optional] [default to undefined]
**playTime** | **number** | 동영상 재생 시간(초) | [optional] [default to undefined]
**uploadUserId** | **string** | 업로드한 회원 ID | [optional] [default to undefined]
**createdAt** | **string** | 업로드 일시(ISO8601) | [optional] [default to undefined]

## Example

```typescript
import { VideoDto } from './api';

const instance: VideoDto = {
    id,
    title,
    description,
    thumbnailUrl,
    playTime,
    uploadUserId,
    createdAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
