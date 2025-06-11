# DifferentLine

文件差异信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Index** | **number** | 排序号，由小到大递增 | [optional] [default to undefined]
**LeftNo** | **number** | 操作起始行号 | [optional] [default to undefined]
**Prefix** | **string** | 操作方式:”+”表示新增,”-“表示删除,” “表示不变 | [optional] [default to '']
**RightNo** | **number** | 操作结束行号 | [optional] [default to undefined]
**Text** | **string** | 文本 | [optional] [default to '']

## Example

```typescript
import { DifferentLine } from './api';

const instance: DifferentLine = {
    Index,
    LeftNo,
    Prefix,
    RightNo,
    Text,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
