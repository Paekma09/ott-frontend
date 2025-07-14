# UserUpdateRequest

회원 정보 수정 요청 DTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nickname** | **string** | 별명/이름 | [default to undefined]
**profileImageUrl** | **string** | 프로필 이미지 URL | [optional] [default to undefined]

## Example

```typescript
import { UserUpdateRequest } from './api';

const instance: UserUpdateRequest = {
    nickname,
    profileImageUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
