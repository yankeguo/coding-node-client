# DescribeTestCaseListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Keyword** | **string** | 关键字搜索 | [optional] [default to undefined]
**Priority** | **number** | 优先级，默认2（中），可选值：0（紧急）,1（高）,2（中）,3（低） | [optional] [default to undefined]
**ProjectName** | **string** | 项目名称 | [optional] [default to undefined]
**SectionId** | **number** | 分组 ID | [optional] [default to undefined]
**TemplateType** | **string** | 用例类型，可选值：STEPS(步骤用例)，TEXT(文本用例) | [optional] [default to undefined]
**Page** | **number** | 页码 | [optional] [default to undefined]
**PageSize** | **number** | 分页大小 | [optional] [default to undefined]

## Example

```typescript
import { DescribeTestCaseListRequest } from './api';

const instance: DescribeTestCaseListRequest = {
    Keyword,
    Priority,
    ProjectName,
    SectionId,
    TemplateType,
    Page,
    PageSize,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
