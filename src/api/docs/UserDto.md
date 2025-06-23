# UserDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | 회원 고유번호 | [optional] [default to undefined]
**username** | **string** | 회원 로그인 ID | [optional] [default to undefined]
**displayName** | **string** | 별명/이름 | [optional] [default to undefined]
**role** | **string** | 권한 | [optional] [default to undefined]
**createdAt** | **string** | 가입일(ISO8601) | [optional] [default to undefined]

## Example

```typescript
import { UserDto } from './api';

const instance: UserDto = {
    id,
    username,
    displayName,
    role,
    createdAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
