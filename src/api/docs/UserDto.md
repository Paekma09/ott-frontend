# UserDto

회원 정보 DTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | 회원 고유번호 | [optional] [default to undefined]
**email** | **string** | 이메일 | [optional] [default to undefined]
**nickname** | **string** | 별명/이름 | [optional] [default to undefined]
**profileImageUrl** | **string** | 프로필 이미지 URL | [optional] [default to undefined]
**role** | **string** | 권한 | [optional] [default to undefined]
**createdAt** | **string** | 가입일 | [optional] [default to undefined]

## Example

```typescript
import { UserDto } from './api';

const instance: UserDto = {
    id,
    email,
    nickname,
    profileImageUrl,
    role,
    createdAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
