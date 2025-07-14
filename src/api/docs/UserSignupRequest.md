# UserSignupRequest

회원가입 요청 DTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** | 로그인 ID | [default to undefined]
**password** | **string** | 비밀번호(8~30자) | [default to undefined]
**nickname** | **string** | 별명 | [default to undefined]

## Example

```typescript
import { UserSignupRequest } from './api';

const instance: UserSignupRequest = {
    email,
    password,
    nickname,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
