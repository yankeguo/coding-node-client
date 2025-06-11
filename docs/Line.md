# Line

git diff详情中每行的详细信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Index** | **number** | diff信息中的行数 | [optional] [default to undefined]
**LeftNo** | **number** | 修改前第几行 | [optional] [default to undefined]
**Prefix** | **string** | 前缀 + - | [optional] [default to '']
**RightNo** | **number** | 修改后第几行 | [optional] [default to undefined]
**Text** | **string** | 文件每行的具体内容 | [optional] [default to '']

## Example

```typescript
import { Line } from './api';

const instance: Line = {
    Index,
    LeftNo,
    Prefix,
    RightNo,
    Text,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
